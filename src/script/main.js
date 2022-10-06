import { Tomato } from "./modules/tomato";
import { RenderTomato } from "./modules/render";
import { ControllerTomato } from "./modules/controller";
import '../img/svg/noto_tomato.svg';

export const init = () => {
  const page = new RenderTomato();
  const tomato = new Tomato(page);
  const controllerTomato = new ControllerTomato(tomato);
};

init();

// export const one = () => {
//   let count = 0;
//   const imp = ["default", "important", "so-so"];
//   document
//     .querySelector(".button-importance")
//     .addEventListener("click", ({ target }) => {
//       count += 1;
//       if (count >= imp.length) {
//         count = 0;
//       }

//       for (let i = 0; i < imp.length; i++) {
//         if (count === i) {
//           target.classList.add(imp[i]);
//         } else {
//           target.classList.remove(imp[i]);
//         }
//       }
//     });
// };
