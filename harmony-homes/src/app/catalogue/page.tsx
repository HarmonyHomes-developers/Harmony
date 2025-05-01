import Header from '@/components/organisms/navbar';
import { Catalogue } from '@/components/catalogue/Catalogue';

export default function CataloguePage() {
  return (
    <>
      <Header />
   <Catalogue />
   </>
  );
}

export const metadata = {
  title: 'Property Catalogue | Harmony Homes',
  description: 'Browse our extensive collection of properties for sale and rent.',
};