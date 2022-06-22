// database lang fix
const ptbr2en = (obj) => {
  return {
    id: obj.id,
    recipe: obj.nome,
    ingredients: obj.ingredientes,
    preparation: obj.preparo,
  };
};

// temos: [ {}, {}, {}]
// o que queremos: [ {category: "Doce", data: []},  ]
const listToSectionList = (list) => {
  const sectionListData = [];

  // isolar todos os nomes de categorias e ordenar
  const categories = Array.from(
    new Set(list.map((item) => item.categoria))
  ).sort();

  // para cada categoria...
  categories.forEach((category) => {
    // buscar os objetos daquela categoria
    const dataPTBR = list.filter((item) => item.categoria == category);
    const dataEN = dataPTBR.map((item) => ptbr2en(item));

    // adicionar à listagem principal (dados para SectionList)
    sectionListData.push({
      category,
      data: dataEN,
    });
  });

  return sectionListData;
};

export default listToSectionList;
