/* eslint-disable import/no-anonymous-default-export */
import questoes from '../bancoDeQuestoes';

export default (req, res) => {
  const idSelecionado = +req.query.id;

  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado);

  if(unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas();
    res.status(200).json(questaoSelecionada.converterParaObjeto());
  } else {
    res.status(204).send();
  }
}
