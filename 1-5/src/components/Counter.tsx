import { useEffect, useState } from "react";
import { Button } from 'antd';

export default function Counter() {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => count != 0 ? setCount(0) : alert('Counter is already at 0 !');

    useEffect(() => {
        if (count == 10) {
            alert("You are at 10");
        }
    }, [count]);

    return (
        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '150px', height: '175px' }}>
                    <h3 style={{ fontSize: '75px' }}>{count}</h3>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '150px', height: '50px' }}>
                    <Button style={{ margin: '25px', height: '60px', width: '100px', backgroundColor: '#36b731' }} type="primary" onClick={increment}>
                        <div style={{ display: 'inline-block', height: '50px', width: '50px' }} className="i-line-md-plus"/>
                    </Button>
                    <Button style={{ margin: '25px', height: '60px', width: '100px', backgroundColor: 'red' }} type="primary" onClick={decrement}>
                        <div style={{ height: '50px', width: '50px' }} className="i-line-md-minus"/>
                    </Button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '150px', height: '100px' }}>
                    <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30px', width: '50px', backgroundColor: 'gray' }} type="primary" onClick={reset}>
                        <div style={{ display: 'inline-block', height: '25px', width: '25px' }} className="i-line-md-backup-restore"/>
                    </Button>
                </div>
            </div>
        </div>
    );
}
