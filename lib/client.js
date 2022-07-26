import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'qac2fgla',
  dataset: 'production',
  apiVersion: '2022-07-23',
  useCdn: true,
  token: 'skPSeLMarggFrF2FK1OfCzu048kyR4yUfZ0omyoZyieqUWFJpcFdnmL6e2fCe0jb8vBJjjsvluNBTu9QsIw38IMTSrmtrGXdJfdUUR5CVDjYeJa7qQBCjExTZUrxI0ZChXD4nR4BJklDvp8nrRSSRLwuXwO2Nfq9OdHdZBwpLuemWcL4pCQf'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);