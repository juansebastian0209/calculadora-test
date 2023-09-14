import { useState, useEffect } from 'react'
import { getFunctions } from '../services/getFuntions'
import { setFunction } from '../services/setFuntion'
import { getHistory } from '../services/getHistory'

export function Calculadora(): JSX.Element {

    const [defaultOperator, setDefaultOperator] = useState<string>()
    const [functions, setFunctions] = useState<string[]>([])
    const [history, setHistory] = useState<any[]>([])
    const [result, setResult] = useState<string>()
    const [input1, setInput1] = useState<string>()
    const [input2, setInput2] = useState<string>()

    const getFunctionsAsync = async () => {
        const functions = await getFunctions()
        setFunctions(functions)
    }

    const getHistoryAsync = async () => {
        const history = await getHistory()
        setHistory(history)
    }

    const setFunctionsAsync = async () => {
        if (defaultOperator && input1 && input2) {
            const [number1, number2] = [input1, input2]
            const result = await setFunction(number1, number2, defaultOperator)
            setResult(result)
        }
    }

    useEffect(
        () => {
            getFunctionsAsync()
        },
        []
    )

    useEffect(
        () => {
            getHistoryAsync()
        },
        [result]
    )

    return (

        <div className="calculadora-wrapper">
            <section className='calculadora'>
                <h1 className='title'>Calculadora</h1>
                <section className='button-group-wrapper'>
                    {
                        functions.map((operator) => {
                            return (
                                <button
                                    className={defaultOperator === operator ? 'active' : ''}
                                    onClick={() => setDefaultOperator(operator)}
                                    key={operator}
                                >
                                    {operator}
                                </button>
                            )
                        })
                    }
                </section>

                {
                    defaultOperator &&
                    <section className="result-wrapper">
                        <div className='input-control'>
                            <label>Numero 1</label>
                            <input
                                onChange={(event) => setInput1(event.target.value)}
                            />
                        </div>
                        <div className='input-control'>
                            <label>Numero 2</label>
                            <input
                                onChange={(event) => setInput2(event.target.value)}
                            />
                        </div>
                        <div className='result-label'>
                            Resultado: {result}
                        </div>
                        <button onClick={setFunctionsAsync}>Calcular</button>
                    </section>
                }

            </section>
            <aside className='history'>
                <h1 className='title'>Historial</h1>
                {
                    history.map((history) => {
                        return (
                            <div id={history.id} className='history-item'>
                                <h4>{history.number1}</h4>
                                <h4>{history.operator}</h4>
                                <h4>{history.number2}</h4>
                                <h4>{history.result}</h4>
                            </div>
                        )
                    })
                }
            </aside>
        </div>
    )
}