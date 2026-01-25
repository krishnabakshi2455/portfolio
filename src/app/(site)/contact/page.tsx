import Contact from '@/components/pages/contact'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Krishna Bakshi",
  description:
    "Get in touch with Krishna Bakshi for collaboration, freelance work, or full-stack development opportunities.",
};
function page() {
  return (
    <div>
      <Contact/>
    </div>
  )
}

export default page
