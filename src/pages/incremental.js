import React from 'react';
import Layout from '@theme/Layout';
import {useCallback, useRef, useState} from "react";

export default function MyReactPage() {
    let [count, setCount] = useState(1);
    let timeout = useRef(1000);
    let increaseNum = useRef(0);
    let [numItem1, setNumItem1] = useState(0);
    let [numItem2, setNumItem2] = useState(0);
    const intervalRef = useRef(null);

    const buyItem1 = useCallback(() => {
        setCount(c => c - 1);
        setNumItem1(n => n + 1);
        increaseNum.current = increaseNum.current + 1;
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCount(c => c + increaseNum.current);
        }, timeout.current);
    }, []);

    const buyItem2 = useCallback(() => {
        setCount(c => c - 1);
        setNumItem2(n => n + 1);
        timeout.current = Math.max(100, timeout.current - 10);
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCount(c => c + increaseNum.current);
        }, timeout.current);
    }, []);

    return (
    	<Layout>
    		<p>
    			新しい新しい放置ゲームへようこそ。Reactを勉強したらもっと発展させます。
    		</p>
        	<h1>ポイント: {count}</h1>
        	<p>
        		<button onClick={buyItem1} variant="contained">発生器を購入</button>
        		<span>発生器の個数: {numItem1}</span>
        	</p>
        	<p>
        		<button onClick={buyItem2} variant="contained">加速器を購入</button>
        		<span>加速器の個数: {numItem2}</span>
        	</p>
        </Layout>
    );
}