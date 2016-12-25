import {setIngredients} from './ingredients'
import {setTags} from './tags'
import {setLearningPaths} from './learningPaths'
import {setCategories} from './categories'

export function fetchRecipeInfo() {
  return function(dispatch) {
    return fetch('/api/recipe-info')
      .then((res) => res.json())
      .then((data) => {
        const {categories, tags, learningPaths, ingredients} = data
        categories && dispatch(setCategories(categories))
        tags && dispatch(setTags(tags))
        learningPaths && dispatch(setLearningPaths(learningPaths))
        ingredients && dispatch(setIngredients(ingredients))
      })
  }
}