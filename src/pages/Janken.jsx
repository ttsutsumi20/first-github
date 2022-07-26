import { useState } from "react";
import { ActionButton } from "../components/ActionButton";

export const Janken = () => {
    const [jankenResult, setJankenResult] = useState({
    myHand: "入力待ち",
    comHand: "待機中",
    result: "未対戦",
  });

  const [history, setHistory] = useState([]);

  const getJankenResult = (myHand) => {
    const hand = ["グー", "チョキ", "パー"];
    const myIndex = hand.indexOf(myHand);
    const comIndex = Math.floor(Math.random() * 3);
    const resultSheet = [
      ["サドンデス！", "全額お支払い！", "ご馳走様です！"],
      ["ご馳走様です！", "サドンデス！", "全額お支払い！"],
      ["全額お支払い！", "ご馳走様です！", "サドンデス！"],
    ];
    return {
      myHand: myHand,
      comHand: hand[comIndex],
      result: resultSheet[myIndex][comIndex],
    };
  };

  const getJanken = (myHand) => {
    const result = getJankenResult(myHand);
    setJankenResult(result);
    setHistory([result, ...history]);
  };


  return (
    <>
    <p>賭けるお酒を選んでね</p>
    <select>
     <option value="beer">ビール</option>
     <option value="sour">サワー</option>
     <option selected value="sake">日本酒</option>
     <option value="wine">ワイン</option>
    </select>
    <input type="text" name="price"></input>円
    
    <p>いざ男気じゃんけん勝負！</p>
      <ActionButton text="グー" action={() => getJanken("グー")} />
      <ActionButton text="チョキ" action={() => getJanken("チョキ")} />
      <ActionButton text="パー" action={() => getJanken("パー")} />
      <p>自分の手：{jankenResult.myHand}</p>
      <p>相手の手：{jankenResult.comHand}</p>
      <p>結果：{jankenResult.result}</p>
      <p>履歴</p>
      <table>
        <thead>
          <tr>
            <th>自分の手</th>
            <th>相手の手</th>
            <th>結果</th>
          </tr>
        </thead>
        <tbody>
          {history.map((x, i) => (
            <tr key={i}>
              <td>{x.myHand}</td>
              <td>{x.comHand}</td>
              <td>{x.result}</td>
            </tr>
          ))}
        </tbody>
      <p>お会計は?</p>
      <ul>
        <li>Aさんは<input type="textarea" name="amount" />円</li>
        <li>Bさんは<input type="textarea" name="amount" />円</li>
        <li>Cさんは<input type="textarea" name="amount" />円</li>
        <li>Dさんは<input type="textarea" name="amount" />円</li>
        <li>Eさんは<input type="textarea" name="amount" />円</li>
      </ul>
      </table>
    </>
  );
};