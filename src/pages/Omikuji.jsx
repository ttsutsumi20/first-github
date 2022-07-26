// import { ActionButton } from "../components/ActionButton.jsx";

// export const Omikuji = () => {
//   // 🔽 追加
//   const getOmikuji = () => {
//     const result = ["大吉", "中吉", "小吉", "凶", "大凶"][
//       Math.floor(Math.random() * 5)
//     ];
//     console.log(result);
//   };

//   return (
//     <>
//       <p>おみくじの画面</p>
//       {/* 🔽 編集 */}
//       <ActionButton text="おみくじをひく" action={getOmikuji} />
//     </>
//   );
// };

import { useState } from "react";
import { ActionButton } from "../components/ActionButton";

export const Omikuji = () => {
  // 🔽 追加
  const [omikujiResult, setOmikujiResult] = useState("");

  const getOmikuji = () => {
    const result = ["Aさん", "Bさん", "Cさん", "Dさん", "Eさん"][
      Math.floor(Math.random() * 5)
    ];
    console.log(result);
    // 🔽 追加
    setOmikujiResult(result);
  };

  return (
    <>
      <p>今回の挑戦者は…？</p>
      <p>（ルール）最大参加者5人まで/飲み会参加者内でA～Eを誰にするか事前に決めておいてね！</p>
      <ActionButton text="プレイヤーを決める" action={getOmikuji} />
      {/* 🔽 追加 */}
      <p>{omikujiResult}</p>
      <p>次にじゃんけんリンクへ飛んでね</p>
    </>
  );
};