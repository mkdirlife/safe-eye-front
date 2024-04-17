import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="max-w-3xl min-h-screen mx-auto scrollbar-hide bg-black pb-12">
        {children}
      </section>
      <Footer />
    </>
  );
}
export const metadata = {
  title: "Notice",
};
