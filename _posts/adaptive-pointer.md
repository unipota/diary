---
title: 『Design for the iPadOS pointer』メモ
date: '2021-04-17'
---

- [Design for the iPadOS pointer](https://developer.apple.com/videos/play/wwdc2020/10640/) を一通り見たのでメモ

---

- インターフェース層とポインティング層
  - インターフェースの精度とポインティングの精度には差がある
- 適応的精度(Adaptive Precision)の導入
- 初期状態は指先のタッチ範囲を模して、19pxの円
  - タッチ操作前提のUIだから
- 形状がボタンに合わせて変形する
  - 精度レベルが変化(低下)したことが分かる
- ポインターはボタンを邪魔しないように背後に描画される
  - ボタンの色がそのまま見えて嬉しい
- UIとしての解像度をカーソルの精度によって表現する
- ポインターにはカーソルとして見えているものと、実際の位置を保持する不可視のものがある
  - 後者をモデルポインター(Model Pointer)と呼ぶ
- モデルポインターがボタンの領域に入ると、snippingする
  - この時モデルポインターは動かず、実際の位置を保つ
- 指を離すとセンタリングする(Recentering)
- 一定時間でポインターは消える
  - 次の行動をポインティングデバイスに制限しないため
  - ポインターが出続けていればポインターを動かそうとしてしまう
- 加速度曲線に従ってポインターは慣性を持って動く
- ポインターが手前で止まったり行き過ぎたりすることを防ぐため、"Magnetism"を導入している
  - 手がトラックパッドから離れた瞬間、ポインターの到達点を予測する
  - 到達する場所にターゲットがいない場合、一定範囲内で最近傍のオブジェクトに吸い寄せられる

---

- 以下感想
- 以前iPadOSのポインターのように変形するカーソルをReactで作った。なんとなく変形が楽しいという理由で模写していたけど、そこにある根源的なコンセプトを今やっと理解できた。
- 核は変形することではなく、適応すること。
- インターフェースが定義する解像度にポインター( = ユーザーの分身)が柔軟に適応することによって、ユーザーの期待が実行されること。Adaptive Pointerはそのための発明なんですね。
- GUIについて考えるとき画面にあるオブジェクトこそがGUIだと思いがちで、その構造ばかりに注目してしまうけど実はそこって一つのレイヤーでしかない。入力とオブジェクトを紐つけるポインターだったりカーソルだったりが担う操作性についても、ちゃんと考えるべきなんでしょう。
- まあアプリケーション環境次第で限界があるわけですが。
- ここら辺は少し前に話題になっていた [UIにおける自己帰属感と余韻について](https://note.com/p5_keita/n/nf45fdd9e1ceb) でも書かれているように、自己帰属感、GUIの道具性に通ずる話ですね。

---

- 久しぶりに英語聞いて耳がびっくりした。
