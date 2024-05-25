interface ModalWinProps {
    hiddenWord: string[],
    countAttempt: number
}

export default function ModalWin({ hiddenWord, countAttempt }: ModalWinProps) {
    return (
        <section className="absolute inset-0 bg-black/80 flex justify-center items-center">
            <div className="w-full max-w-xl bg-zinc-700 rounded-lg p-6 space-y-6">
                <h1
                    className="text-white text-center text-3xl font-sora font-bold"
                >
                    FIM DE JOGO
                </h1>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-white text-lg font-semibold">Palavra correta</p>
                    <div className="flex justify-center gap-4">
                        {
                            hiddenWord.map((word, i) => {
                                return (
                                    <span key={i} className="box right">{word}</span>
                                )
                            })
                        }
                    </div>
                </div>

                <ul className="text-white flex justify-center gap-6">
                    <li className="flex items-center gap-3">
                        <p>Tentativas:</p> <span className="text-lg font-bold">{countAttempt}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <p>Score:</p> <span className="text-lg font-bold">1</span>
                    </li>
                </ul>

                <hr />

                <div className="w-full flex justify-center">
                    <button
                        className="border-white border text-white hover:text-black hover:border-transparent transition-all hover:bg-teal-400 py-3 px-6 rounded-lg text-base font-semibold font-sora"
                    >
                        Jogar novamente
                    </button>
                </div>
            </div>
        </section>
    )
}