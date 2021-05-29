import "antd/dist/antd.css";
import { Layout, Menu, Button, Table, message } from 'antd';
import {render} from "@testing-library/react";
import {Link} from "react-router-dom";
import {useState} from 'react'
import { Content, Footer } from "antd/lib/layout/layout";

const { Header, content, footer} = Layout;
const {column} = Table;

export default function ListarInvestimentos(){
    const [investimentos, setInvestimentos] = useState([]);

    function remove(record){
        message.success("Investimento removido com successo!");
    }

    return (
        <div className= "container">
        <Layout className="layout">
            <Header>
             <div className="logo" />
             <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"> 
                    <Link to="/cadastrar-investimento">
                    Cadastrar Investimento
                    </Link> 
                </Menu.Item>
                
                <Menu.Item key="2">
                <Link to="/listar-investimentos">
                    Listar Investimentos
                    </Link> 
                </Menu.Item>   
            </Menu>
            </Header>
           
            <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
                <h2>INVESTIMENTOS</h2>
                <Table dataSource={investimentos}>
                    <column title= "Codigo do ativo" dataIndex="codigoAtivo" keys="codigoAtivo"/>
                    <column title= "Valor" dataIndex="valor" keys="valor"/>
                    <column title= "Quantidades de Cotas" dataIndex="quantidadesdeCotas" keys="quantidadesdeCotas"/>
                    <column title= "Data da Compra" dataIndex="datadaCompra" keys="datadaCompra"/>
                    <column title= "Remover"  keys="atualizar"
                        render={(text, record) => (<Button onClick={() => remove(record)} type="primary">Remover</Button>)} />
                </Table>
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                My invest 2021
                By Lisber Victores & Fullstack Week  2.0
            </Footer>
        </Layout>
        </div>    
    );
}



