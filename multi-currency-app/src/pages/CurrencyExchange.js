import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';



const CurrencyExchange = () => {
    const [currencies, setCurrencies] = useState([])

    const [walletId, setWalletId] = useState(1)
    const [amount, setAmount] = useState(0)
    const [newCurrency, setNewCurrency] = useState()


    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {wallet_id: walletId, credit_amount: amount, credit_currency: newCurrency};
        axios.post('http://localhost:5000/api/transaction/add',obj).then(res => {
            console.log("success")
            
        })
    }

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleNewCurrency = (e) => {
        setNewCurrency(e.target.value)
    }

    const loadCurrencies = () => {
        // e.preventDefault()
        axios.get('http://localhost:5000/api/exchange/all').then(res => {
            const currenciesFromApi = res.data
            setCurrencies(currenciesFromApi)
        }
        
        )
    }

    useEffect(() => {
        loadCurrencies()
    }, [])
  
    return (
    <Container>
        
        <Form onSubmit={handleSubmit}>

        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            My Wallets
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>


        <Form.Group className="mb-3" controlId="">
            <Form.Label>Amount to Exchange (SGD)</Form.Label>
            <Form.Control value={amount} onChange={handleAmount}/>
        </Form.Group>
        
        <Dropdown>


        <Form.Group className="mb-3" controlId="">
            <Form.Label>Currency exchange to</Form.Label>
            <Form.Control value={newCurrency} onChange={handleNewCurrency}/>
        </Form.Group>

        {/* <Dropdown.Menu>
            {currencies.map((c)=> {
                return <Dropdown.Item href="#/action-1">{c}</Dropdown.Item>
            })}
        </Dropdown.Menu> */}
        </Dropdown>

        <Button variant="primary" type="submit" >
            Submit
        </Button>


        <></>
        <h2>Currency Conversion</h2>
        <ListGroup>
            {currencies.map((c) => {
                return <ListGroup.Item><Badge bg="secondary">{c.exchange_currency}</Badge> {c.rate}</ListGroup.Item>
            })}
            

        </ListGroup>
        </Form>
    </Container>
  )
}

export default CurrencyExchange
