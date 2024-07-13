import HeroFlats from './HeroFlats.tsx'; // Ensure the path is correct

export default function Hero() {
  
  return (
    <div>
      <HeroFlats
        title="Happiness is the highest form of health"
        description=""
        image={{ src: 'https://www.bibakart.com/cdn/shop/articles/flat-lay-natural-self-care-products-composition.jpg?v=1692178941&width=1500', alt: 'Beautiful Nature' }}
        placement="right"
        cta={[
          { id: "cta-1", href: "/shop", text: "Shop Now", outline: false },
          { id: "cta-2", href: "/learn", text: "Learn More", outline: true },
        ]}
      />
    </div>
  );
}
