import { redirect } from 'next/navigation';

function OldPage() {
  redirect("/new-page");

  return <h1>Redirecting to /new-page</h1>
}

export default OldPage;