import { Component, ChangeDetectionStrategy, signal, computed, HostListener } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CHAPTERS_DATA } from '../../../data/chapters.data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="max-w-3xl mx-auto p-6 h-[80vh] flex flex-col items-center justify-center">
      
      <div class="mb-8 text-center w-full flex justify-between items-center">
        <h1 class="text-3xl font-black text-heading flex items-center gap-3">
          <i class="fa-solid fa-layer-group text-primary"></i>
          البطاقات التعليمية السريعة
        </h1>
        <div class="bg-slate-500/10 px-4 py-2 rounded-full font-bold text-muted">
          {{ currentIndex() + 1 }} / {{ flashcards().length }}
        </div>
      </div>

      <!-- Card Container -->
      <div class="relative w-full aspect-[4/3] md:aspect-video perspective-1000 cursor-pointer" 
           (click)="flipCard()">
        
        <div class="w-full h-full transition-transform duration-500 transform-style-3d relative"
             [class.rotate-y-180]="isFlipped()">
          
          <!-- Front of Card (Image) -->
          <div class="absolute w-full h-full backface-hidden bg-card border-4 border-slate-500/10 rounded-3xl shadow-xl flex flex-col items-center justify-center p-8">
            @if (currentCard()?.item?.imageOrSvg) {
              @if (isSvg(currentCard()?.item?.imageOrSvg)) {
                <div [innerHTML]="getSafeSvg(currentCard()?.item?.imageOrSvg)" class="w-48 h-48 md:w-64 md:h-64 mb-6 text-heading fill-current"></div>
              } @else {
                <img [src]="currentCard()?.item?.imageOrSvg" alt="Sign" class="max-h-48 md:max-h-64 object-contain mb-6">
              }
            } @else {
              <i class="fa-solid fa-question-circle text-8xl text-slate-300 mb-6"></i>
            }
            <p class="text-muted font-bold text-lg text-center">اضغط مسطرة (Space) أو انقر للقلب</p>
          </div>

          <!-- Back of Card (Answer) -->
          <div class="absolute w-full h-full backface-hidden bg-primary text-white border-4 border-primary rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 rotate-y-180">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-2xl mb-6">
              <i class="fa-solid" [ngClass]="currentCard()?.item?.icon || 'fa-info'"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-black text-center mb-4 leading-relaxed">
              {{ currentCard()?.item?.title || currentCard()?.item?.description }}
            </h2>
            <p class="text-white/70 font-bold text-center mt-auto">اضغط مسطرة للعودة</p>
          </div>

        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-6 mt-10">
        <button (click)="prevCard()" class="w-14 h-14 rounded-full bg-slate-500/10 hover:bg-slate-500/20 text-heading transition flex items-center justify-center text-xl shadow-sm">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
        <div class="flex gap-2">
          <button (click)="markEasy()" class="px-6 py-3 bg-success/10 hover:bg-success/20 text-success border border-success/30 rounded-xl font-bold transition flex items-center gap-2">
            <i class="fa-solid fa-face-laugh-beam"></i> سهل
          </button>
          <button (click)="markHard()" class="px-6 py-3 bg-danger/10 hover:bg-danger/20 text-danger border border-danger/30 rounded-xl font-bold transition flex items-center gap-2">
            <i class="fa-solid fa-face-frown-open"></i> صعب
          </button>
        </div>
        <button (click)="nextCard()" class="w-14 h-14 rounded-full bg-slate-500/10 hover:bg-slate-500/20 text-heading transition flex items-center justify-center text-xl shadow-sm">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
      </div>

    </div>
  `,
  styles: [`
    .perspective-1000 { perspective: 1000px; }
    .transform-style-3d { transform-style: preserve-3d; }
    .backface-hidden { backface-visibility: hidden; }
    .rotate-y-180 { transform: rotateY(180deg); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlashcardsComponent {
  isFlipped = signal(false);
  currentIndex = signal(0);

  // Extract all items that have images for flashcards
  flashcards = computed(() => {
    const cards: any[] = [];
    CHAPTERS_DATA.forEach(chapter => {
      chapter.sections.forEach(section => {
        section.items.forEach(item => {
          if (item.imageOrSvg) {
            cards.push({ chapterId: chapter.id, item });
          }
        });
      });
    });
    // Shuffle
    return cards.sort(() => Math.random() - 0.5);
  });

  currentCard = computed(() => this.flashcards()[this.currentIndex()]);

  constructor(private sanitizer: DomSanitizer) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Space') {
      event.preventDefault();
      this.flipCard();
    } else if (event.code === 'ArrowRight') {
      this.prevCard();
    } else if (event.code === 'ArrowLeft') {
      this.nextCard();
    }
  }

  flipCard() {
    this.isFlipped.update(v => !v);
  }

  nextCard() {
    this.isFlipped.set(false);
    setTimeout(() => {
      if (this.currentIndex() < this.flashcards().length - 1) {
        this.currentIndex.update(i => i + 1);
      } else {
        this.currentIndex.set(0); // loop
      }
    }, 150); // wait for flip animation to start
  }

  prevCard() {
    this.isFlipped.set(false);
    setTimeout(() => {
      if (this.currentIndex() > 0) {
        this.currentIndex.update(i => i - 1);
      } else {
        this.currentIndex.set(this.flashcards().length - 1);
      }
    }, 150);
  }

  markEasy() {
    // In a real SRS this would affect the algorithm. For now, just next card.
    this.nextCard();
  }

  markHard() {
    // Similarly, this would flag it for sooner review.
    this.nextCard();
  }

  isSvg(str: string | undefined): boolean {
    return str ? str.trim().startsWith('<svg') : false;
  }

  getSafeSvg(str: string | undefined): SafeHtml | null {
    if (!str) return null;
    return this.sanitizer.bypassSecurityTrustHtml(str);
  }
}
