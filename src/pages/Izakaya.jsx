import { useState, useEffect } from "react";
import axios from "axios";

export const Izakaya = () => {
    // 🔽 追加
    const [ loading, setLoading] = useState(true);

    const [ name_kana,setName ] = useState([]);
    // 🔽 追加
    const [ address, setAddress ] = useState("");

    const getBooks = async (keyword) => {
        const url = "http://webservice.recruit.co.jp/hotpepper/shop/v1/:";
        const result = await axios.get(`${tel}${keyword}`);
        console.log(result.data);
        setName(result.data.items ?? []);
    };

    // 🔽 追加
    const selectName = (name) => {
    setName(shop.name_kana);
    };

    return(
        <>
        <table>
        <tbody>
          <tr>
            <td>お店探し</td>
            <td>{name}</td>
          </tr>
         </tbody>
        </table>

        <p>キーワードで検索する</p>
        <input type="text" onChange={(e) => getName(e.target.value)} />
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>店名</th>
                    <th>予算</th>
                    <th>リンク</th>
                </tr>
            </thead>
            <tbody>
                {name.map((x, i) => (
                    <tr key={i}>
                        <td>
                          {/* 🔽 編集（onClick部分） */}
                          <button type="button" onClick={() => selectName(x)}>
                            選択
                          </button>
                        </td>
                        <td>{x.name_kana.title}</td>
                        <td>{x.volumeInfo.publisher}</td>
                        <td>
                         <a
                         href={x.volumeInfo.infoLink}
                         target="_blank"
                         rel="noreferrer"
                         >
                            Link
                         </a>
                        </td>
                    </tr>
                  ))}
            </tbody>
        </table>
        </>
    );
};