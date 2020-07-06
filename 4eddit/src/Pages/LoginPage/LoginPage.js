import React, { useState } from "react";
import { Header, Body, Form, Button } from "../LoginPage/style";

export default function LoginPage() {
  return (
    <div>
      <Header>
        <h1>BANANINHA EDDIT</h1>
      </Header>
      <Body>
        <h2>Login</h2>
        <Form>
          <label htmlFor="login">E-MAIL</label>
          <input
            placeholder="Digite seu e-mail"
            id="login"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          ></input>
          <label htmlFor="password">SENHA</label>
          <input
            placeholder="Digite sua senha"
            id="password"
            type="password"
            required
          ></input>
          <Button>ENTRAR</Button>
          <Button>CADASTRAR</Button>
        </Form>
      </Body>
    </div>
  );
}
