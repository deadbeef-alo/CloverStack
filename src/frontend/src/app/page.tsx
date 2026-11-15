"use client";


export default function Home() {
  const routes = [
    "/selection",
  ];

  return (
    <div className="text-center">
      <h1>
        Current routes:
      </h1>
      <ul>
        {routes.map((route, i) => (
          <a href={route} key={i}>{route}</a>
        ))}
      </ul>
    </div>
  );
}
