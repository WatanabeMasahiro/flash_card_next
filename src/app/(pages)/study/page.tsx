const Study = (): JSX.Element => {
  return (
    <>
      <main className="l-main">
        <article className="p-card-bundle">
          <div className="p-card-bundle__body">
            <h2>ヘッダー</h2>
          </div>
          <div className="p-card-bundle__body">
            <h2>ボディ</h2>
            <article className="">
              <div>
                <i>アイコン</i>
                <button type="button">ワード</button>
                <i>アイコン</i>
              </div>
            </article>
            <article className="">
              <div>
                <button type="button">次へ</button>
              </div>
            </article>
          </div>
        </article>

        <article className="">
          <div>
            <button type="button">チェック</button>
          </div>
        </article>
      </main>
    </>
  );
};

export default Study;