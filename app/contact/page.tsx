export default function Contact() {
  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700 mb-6">Tell us about your project.</p>

      <form
        action="https://formspree.io/f/your-id"
        method="POST"
        className="space-y-3"
      >
        <input
          name="name"
          placeholder="Your name"
          className="border p-3 w-full rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-3 w-full rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border p-3 w-full rounded h-32"
          required
        />
        <button className="bg-blue-700 text-white px-5 py-3 rounded hover:bg-blue-800">
          Send
        </button>
      </form>
    </main>
  );
}
