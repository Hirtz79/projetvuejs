import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bdd:
            {
                'categories': [
                    {
                        'id' : 0,
                        'nom': 'Poids',
                        'produits': [

                            {
                                'id' : 0,
                                'titre': 'Haltère 2.5kg',
                                'description': 'Petite haltère de 2.5kg pour tentrainer',
                                'prix': 4.99,
                                'url': require('@/assets/2.5kg.jpg'),

                            },
                            {
                                'id' : 1,
                                'titre': 'Haltère 4kg',
                                'description': 'De bonnes haltère de 4kg pour musclé vos bras',
                                'prix': 7.99,
                                'url': require('@/assets/4kils.jpg'),

                            }


                        ]
                    },
                    {
                        'id' : 1,
                        'nom': 'Machine',
                        'produits': [


                            {
                                'id' : 0,
                                'titre': 'Press pectoraux',
                                'description': 'Une bonne machine pour les pectoraux, prêt à vous lancer ?',
                                'prix': 140.99,
                                'url': require('@/assets/pectoral.jpg'),

                            },
                            {
                                'id':1,
                                'titre': 'Wide chest press',
                                'description': 'Vous voulez une machine qui cible en particulier le grand pectoral ! cette machine est pour vous !',
                                'prix': 146.99,
                                'url': require('@/assets/wide.jpg'),

                            }


                        ]
                    },
                    {
                        'id':2,
                        'nom': 'Alimentaire',
                        'produits': [


                            {
                                'id' : 0,
                                'titre': 'Whey gout cookie !',
                                'description': 'Une bonne whey au gout cookie comme vous ne lavez jamais gouté',
                                'prix': 15.99,
                                'url': require('@/assets/whey-cook.jpg'),

                            },
                            {
                                'id' : 1,
                                'titre': 'Whey gout chocolat !',
                                'description': 'Une bonne whey au gout chocolat comme vous ne lavez jamais gouté',
                                'prix': 15.99,
                                'url': require('@/assets/whey-choc.jpg'),

                            }


                        ]
                    }
                ]
            }

    },
    mutations: {},
    actions: {},
    modules: {}
})
