export interface Rating {
  id: number;
  title: string;
  score: number;
  review: string;
}

export var ratings: Rating[] = [
  {
    id: 0,
    title: "John Wick: Chapter 4",
    score: 4.3,
    review:
      "The stunts and choreography are beyond impressive. Every artist involved does their job to perfection. Donnie Yen's performance is unbelievable. Not only does he fight great, but he also has to move like a blind man. Keanu Reeves is also very impressive. Keanu IS John Wick. Although there are a few scenes where his enemies stand by and wait for their turn to attack, it's easy to overlook because everything else is so great.",
  },
  {
    id: 1,
    title: "The Matrix Resurrections",
    score: 3.8,
    review:
      "The Matrix Resurrections is a decent addition to the franchise, but it doesn't quite reach the heights of the original trilogy. Keanu Reeves is still great as Neo, but some of the new characters fall flat. The action scenes are well done, but the story is a bit convoluted at times.",
  },
  {
    id: 2,
    title: "Spider-Man: No Way Home",
    score: 4.5,
    review:
      "Spider-Man: No Way Home is everything fans could have hoped for and more. The action scenes are spectacular, the story is emotional and engaging, and the return of past Spider-Man actors is handled perfectly. Tom Holland continues to impress as Spider-Man, and the supporting cast is great as well. This is a must-see for any Spider-Man fan.",
  },

  {
    id: 3,
    title: "Stranger Things",
    score: 4.6,
    review:
      "Stranger Things is an amazing show that blends horror, sci-fi, and nostalgia into a perfect package. The young cast is incredibly talented, and the adult actors are great as well. The story is engaging and keeps you on the edge of your seat. This is a must-watch for any fan of 80s culture.",
  },
  {
    id: 4,
    title: "Game of Thrones",
    score: 4.2,
    review:
      "Game of Thrones is a classic epic fantasy that captivated audiences for years. The cast is amazing, and the production values are top-notch. The story is complex and engaging, with plenty of twists and turns. However, the final season was a bit of a letdown, and some fans were disappointed with the ending.",
  },
  {
    id: 5,
    title: "Breaking Bad",
    score: 4.8,
    review:
      "Breaking Bad is a masterpiece of television. Bryan Cranston gives a career-defining performance as Walter White, and the supporting cast is amazing as well. The story is engaging and keeps you on the edge of your seat. This is a must-watch for anyone who loves great TV.",
  },
];

export const getRating = (id: number) => ratings.find((m) => m.id === id);

export const updateRatings = (newRatings: Rating[]) => (ratings = newRatings);
