// Catálogo fixo (sem backend) — preços escolhidos para exercitar todas as faixas de desconto
const PRODUTOS = [
  { id: 1, nome: "ESP32", categoria: "Microcontroladores", preco: 45.9, imagem:"https://wholesale.pimoroni.com/cdn/shop/products/20168Front_256x256.png?v=1674736628"},
  { id: 2, nome: "Arduino UNO", categoria: "Microcontroladores", preco: 89.9, imagem:"https://public.blenderkit.com/thumbnails/assets/065981229b5d40178f6040c9f6e7472b/files/thumbnail_a2bcb665-669b-4c0b-a817-94e1ba511ea9.png.256x256_q85_crop-%2C.png.webp?webp_generated=1766500183"},
  { id: 3, nome: "Arduino Mega", categoria: "Microcontroladores", preco: 139.9, imagem:"https://leobot.net/productimages/2840.webp" },
  { id: 4, nome: "Arduino Pro Micro", categoria: "Microcontroladores", preco: 54.9, imagem:"https://robu.in/_next/image/?url=https%3A%2F%2Frobu-prod-media.s3.ap-south-1.amazonaws.com%2Fuploads%2F2020%2F08%2FCytron-MAKER-NANO-8.png&w=256&q=75"},
  { id: 5, nome: "Cabo USB 2.0 A/B 50cm para Arduino", categoria: "Cabos", preco: 19.9, imagem:"https://www.pcyes.com.br/_next/image?url=%2Fapi%2Fpcyes%2Fimage%2Fcdn.oderco.com.br%2Fprodutos%2F351245%2F548C240C6BF31B9DE0630300A8C02F94&w=256&q=75" },
  { id: 6, nome: "Kit Cabos Jumper", categoria: "Cabos", preco: 14.9, imagem:"https://leobot.net/productimages/12723.webp" },
];

const formatarBRL = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
