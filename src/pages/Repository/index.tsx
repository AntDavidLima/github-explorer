import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/29358300?s=460&u=8486fec35b12c3a0cb146db9d646150afcaca94e&v=4"
            alt="David Lima"
          />
          <div>
            <strong>RedaçãoUP</strong>
            <p>
              Minha descrição é muito loga porque eu preciso testar para saber
              se não ocorrá nenhum erro por conta do tamanho da descrição
            </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1080</strong>
            <p>Stars</p>
          </li>
          <li>
            <strong>48</strong>
            <p>Forks</p>
          </li>
          <li>
            <strong>67</strong>
            <p>Issues abertas</p>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="ksjhdfkshdf">
          <div>
            <strong>asdasdasd</strong>
            <p>asdasdasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
