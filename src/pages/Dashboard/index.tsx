import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Qual o nome do repositório?" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/29358300?s=460&u=8486fec35b12c3a0cb146db9d646150afcaca94e&v=4"
          alt="David Lima"
        />
        <div>
          <strong>antdavidlima/redacao-up</strong>
          <p>
            A social network to practice writing ENEM (Brazilian High School
            Exam) standard essays
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/29358300?s=460&u=8486fec35b12c3a0cb146db9d646150afcaca94e&v=4"
          alt="David Lima"
        />
        <div>
          <strong>antdavidlima/redacao-up</strong>
          <p>
            A social network to practice writing ENEM (Brazilian High School
            Exam) standard essays
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/29358300?s=460&u=8486fec35b12c3a0cb146db9d646150afcaca94e&v=4"
          alt="David Lima"
        />
        <div>
          <strong>antdavidlima/redacao-up</strong>
          <p>
            A social network to practice writing ENEM (Brazilian High School
            Exam) standard essays
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
