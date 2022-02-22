import { rest } from "msw";
export const handlers = [
 rest.get("/api/get-some-cars", (req, res, ctx) => {
   return res(
     ctx.status(200),
     ctx.json([
       { regPlate: "A B19 GUY", make: "Audi ", model: "TT" },
       { regPlate: "ZR0 K1DZ", make: "Land Rover", model: "Defender" },
       { regPlate: "1M A CAR", make: "Ford", model: "Ka" },
       { regPlate: "5IMP50N5", make: "Powell", model: "The Homer" },
     ])
   );
 }),
];