import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import VuePaginate from 'vue-paginate';
import Vue2Filters from 'vue2-filters';

import { MovieList } from '@containers';

const localVue = createLocalVue();

localVue.use(VuePaginate);
localVue.use(Vue2Filters);
localVue.use(Vuex);

describe('MovieList Spec', () => {
    let actions, mutations, store, wrapper;

    const movies = [
        {
            "title": "Star Wars: Episode IV - A New Hope",
            "year": "1977",
            "imdbid": "tt0076759",
            "type": "movie",
            "genre": "Action, Adventure, Fantasy, Sci-Fi"
        },
        {
            "title": "Star Wars: Episode V - The Empire Strikes Back",
            "year": "1980",
            "imdbid": "tt0080684",
            "type": "movie",
            "genre": "Action, Adventure, Fantasy, Sci-Fi"
        }
    ];

    beforeEach(() => {

        actions = {
            findMovieByTitle: jest.fn(),
        }

        mutations = {
            SET_MOVIES(state, value) {
                state.movies = value;
            }
        }

        store = new Vuex.Store({
            actions,
            mutations,
            state: {
                movies: {},
            }
        });

        wrapper = mount(MovieList, {
            store,
            localVue
        });
    });

    it('has movies list', () => {
        store.commit('SET_MOVIES', movies);
        expect(wrapper.vm.movies).toEqual(movies);
    });

});