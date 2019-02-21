<template>
    <PlaceholderDescription v-if="loading" />
    <div class="row p-4 c-movie-description" v-else>
        <div class="col d-none d-sm-block c-movie-description-image">
            <img :src="movieData.poster">
        </div>
        <div class="col">
            <h4 class="mb-4"> {{ movieData.title }} </h4>
            <p>
                {{ movieData.plot }}
            </p>
            <ul class="mt-4">
                <li>
                    <b>Ano:</b>
                    {{ movieData.year }}
                </li>
                <li>
                    <b>Gênero:</b>
                    {{ movieData.genre }}
                </li>
                <li>
                    <b>Direção:</b>
                    {{ movieData.director }}
                </li>
                <li>
                    <b>Prêmios:</b>
                    {{ movieData.awards }}
                </li>
                <li class="mt-4 text-right">
                    <BaseButton
                        @click="hideModal();"
                        text="OK" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    import { BaseButton, PlaceholderDescription } from '@components';

    export default {
        name: 'MovieDescription',
        components: {
            BaseButton,
            PlaceholderDescription
        },
        props: {
            movieId: {
                required: true,
                type: String
            }
        },
        data() {
            return {
                movieData: [],
                loading: true,
            }
        },
        async mounted() {
            this.movieData = await this.findMovieDescriptionById(this.movieId);
            this.loading = false;
        },
        methods: {
            ...mapActions([
                'findMovieDescriptionById'
            ]),
            hideModal() {
                this.$emit('close');
            }
        }
    }
</script>

<style lang="scss" scoped>

    .c-movie-description {
        &-image {
            height: 400px;
            & > img {
                width: 100%;
                height: 100%;
            }
        }
    }

</style>
