console.log('Speca script');

// Создание модуля Гунгнир
describe('Копьё Гунгнир', () => {
  const $field = document.getElementById('information-field');
  const content = $field.value;

  it('должно иметь исходное информационное поле', done => {
    expect(content).that.is.not.empty;
    done();
  });

  it('должно зорко вглядеться в это поле и увидеть истину в нём', done => {
    expect(content).to.contain.oneOf(['true']);
    done();
  });

  it('должно отсечь всю тьму, оставив лишь только истину', done => {
    const trueString = 'true';
    const regExp = new RegExp(trueString);

    const startIndex = content.indexOf('true');
    const endIndex = startIndex + trueString.length;
    const onlyTrue = content.slice(startIndex, endIndex);
    expect(onlyTrue).to.match(regExp);
    done();
  });
});