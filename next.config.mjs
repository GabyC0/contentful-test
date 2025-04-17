// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export', // enables static export
//     trailingSlash: true, // optional, but good for static hosting consistency
//   }
  
//   export default nextConfig
  

//from cloudflare doc:
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {};

 if (process.env.NODE_ENV === 'development') {
   await setupDevPlatform();
 }

export default nextConfig;