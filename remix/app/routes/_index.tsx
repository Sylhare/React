import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';

export async function loader() {
  return {
    message: 'hello from loader',
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

// Needs the export default or the page won't render
export default function HomePage() {
  const loaderData = useLoaderData<typeof loader>();
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: 'This is a note',
    },
  ]);

  return (
    <main className="container">
      <h1>Welcome to Remix</h1>
      <p>{loaderData.message}</p>
      <button
        onClick={() =>
          setNotes([
            ...notes,
            {
              id: notes.length + 1,
              text: `Note ${notes.length + 1}`,
            },
          ])
        }
      >
        Create a Note
      </button>
      <ul>
        {notes.map((note) => {
          return <li key={note.id}>{note.text}</li>;
        })}
      </ul>
    </main>
  );
}