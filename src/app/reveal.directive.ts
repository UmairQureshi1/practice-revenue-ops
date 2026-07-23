import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';

/**
 * Reveal-on-scroll ENHANCEMENT.
 *
 * Design rule: content must NEVER stay hidden. The element only gets the
 * hidden `.reveal` state when we are confident we can reveal it again:
 *   - no IntersectionObserver support        -> shown immediately
 *   - element already in view on init        -> revealed next frame
 *   - scrolled into view later               -> revealed by the observer
 *   - failsafe timer (in case anything fails) -> revealed after 1.2s
 *
 * So the animation is purely additive; if any of it misfires the page still
 * renders fully. Fixes the "everything blank" failure mode.
 */
@Directive({
  selector: '[hrReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  /** Stagger in ms applied as animation-delay when the element enters view. */
  @Input() revealDelay = 0;

  /** Entrance direction: 'up' (default) | 'down' | 'right' | 'left' | 'in'. */
  @Input('hrReveal') direction: '' | 'up' | 'down' | 'right' | 'left' | 'in' = '';

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly zone = inject(NgZone);
  private observer?: IntersectionObserver;
  private failsafe?: ReturnType<typeof setTimeout>;
  private done = false;

  ngOnInit(): void {
    const node = this.el.nativeElement as HTMLElement;

    // No observer support -> just show it, no animation.
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    // Enter the hidden state only now that JS is running and can undo it.
    this.renderer.addClass(node, 'reveal');
    const dirClass = {
      down: 'reveal--down',
      right: 'reveal--right',
      left: 'reveal--left',
      in: 'reveal--in',
    }[this.direction as string];
    if (dirClass) this.renderer.addClass(node, dirClass);

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.reveal();
            }
          }
        },
        { threshold: 0.08 },
      );
      this.observer.observe(node);

      // Failsafe: guarantee the content is never stuck hidden.
      this.failsafe = setTimeout(() => this.reveal(), 1200);
    });
  }

  private reveal(): void {
    if (this.done) return;
    this.done = true;

    const node = this.el.nativeElement as HTMLElement;
    if (this.revealDelay) {
      this.renderer.setStyle(node, 'animation-delay', `${this.revealDelay}ms`);
    }
    this.renderer.addClass(node, 'is-visible');

    this.observer?.disconnect();
    if (this.failsafe) clearTimeout(this.failsafe);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.failsafe) clearTimeout(this.failsafe);
  }
}
