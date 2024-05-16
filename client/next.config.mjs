/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/brand",
        destination:
          "https://drive.google.com/drive/folders/12_ENSLI72JAeB3rHTRxUvOCsK_wq2fUI",
        permanent: true,
      },
      {
        source: "/calendar",
        destination: "https://lu.ma/hello_miami",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
