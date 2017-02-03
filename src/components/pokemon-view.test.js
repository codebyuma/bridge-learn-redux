import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {PokemonView} from './pokemon-view';
import sinon from 'sinon';


describe('<PokemonView />', () => {

  it('Should display the name in an H2', () => {

    const wrapper = shallow(<PokemonView
      pokeData={{name: 'Bob', height: '40 feet'}}
    />);

    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.find('h2').text()).to.contain('Bob');

  });

  it('should favourite a pokemon on button click', () => {

    let mySpy = sinon.spy();

    const wrapper = shallow(<PokemonView
      pokeData={{name: 'Bob', height: '40 feet'}}
      favourite={mySpy}
    />);


    wrapper.find('button').simulate('click');
    expect(mySpy.calledOnce).to.equal(false);

  });

});
