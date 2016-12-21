import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form';

@reduxForm({
  form: 'recipeCreateForm'
})
export default class RecipeCreateForm extends Component {
  render () {
    return (
      <div>
        <form id='create-new-video-recipe-form'>
          <fieldset>
            <legend>Add a new Videos to Keychn VOD Platform</legend>
          </fieldset>
          <p>Recipe Text Details</p>
          <div className='form-group col-md-12'>
            <Field name='title' component='input' className='form-control' placeholder='Recipe title' type='text' />
          </div>
          <div className='form-group col-md-12'>
            <input className='form-control' name='recipeSlug' placeholder='Recipe slug' type='text' />
          </div>
          <div className='form-group col-md-12'>
            <input className='form-control' name='recipeDescription' placeholder='Recipe description' type='text' />
          </div>
          <p>Recipe Category</p>
          <select className='form-control' name='selectRecipeCategory' >
            <option value='default' selected>Choose one category</option>
            <option value='spanish'>Spanish</option>
            <option value='asian' >Asian</option>
            <option value='mexican' >Mexican</option>
          </select>

          <p>Recipe Tags (select multiple)</p>
          <select className='form-control' name='selectRecipeTags' multiple>
            <option value='default' selected>Choose one or more tags</option>
            <option value='healthy' >healthy</option>
            <option value='veggie' >veggie</option>
            <option value='baked' >baked</option>
            <option value='grilled' >grilled</option>
            <option value='roasted' >roasted</option>
          </select>

          <p> Cooking Path (select multiple)</p>
          <select className='form-control' name='selectLearningPath' multiple>
            <option value='default' selected>Choose one or more learning paths </option>
            <option value='spanish-basics'>Learn the Spanish basics</option>
            <option value='modern-techniques-ferran' >Learn the modern techniques with Ferran</option>
            <option value='french-basics' >Learn the French basics</option>
            <option value='italian-basics' >Learn the Italian basics</option>
          </select>

          <p>Recipe Type</p>
          <select className='form-control' name='selectRecipeType'>
            <option value='default' selected>Choose one recipe type</option>
            <option value='starter-course'>Starter</option>
            <option value='main-course' >Main</option>
            <option value='dessert-course' >Dessert</option>
          </select>

          <p>Recipe Pictures URLs</p>
          <div className='form-group col-md-12'>
            <input className='form-control' name='recipeIngredientsPicture' placeholder='Recipe ingredients picture' type='text' />
          </div>
          <div className='form-group col-md-12'>
            <input className='form-control' name='recipeFinalPicture' placeholder='Recipe final picture' type='text' />
          </div>
          <p>Recipe Video URLs</p>
          <div className='form-group col-md-12'>
            <input className='form-control' name='recipeThumbnail' placeholder='Recipe thumbnail for the video' type='text' />
          </div>
          <div className='form-group col-md-12'>
            <input className='form-control' name='recipeVideoPreview' placeholder='Recipe video preview' type='text' />
          </div>
          <div className='form-group col-md-12'>
            <input className='form-control' name='recipeVideoFull' placeholder='Recipe video full-length' type='text' />
          </div>

          <p>Recipe Detailed Information</p>
          <div className='form-group col-md-12'>
            <input className='form-control' name='recipeLength' placeholder='Recipe length (minutes)' type='number' min='5' />
          </div>
          <div className='form-group col-md-12'>
            <input className='form-control' name='recipeServings' placeholder='Recipe servings (people)' type='number' min='1' />
          </div>
          <p>Recipe Difficulty</p>
          <select className='form-control' name='selectRecipeDifficulty'>
            <option value='default' selected>Choose the difficulty</option>
            <option value='recipe-difficulty-easy'>Easy</option>
            <option value='recipe-difficulty-easy'>Medium</option>
            <option value='recipe-difficulty-easy'>Hard</option>
          </select>

          <p>Author Information</p>
          <div className='form-group col-md-12'>
            <input className='form-control' name='authorThumbnail' placeholder='Author thumbnail URL' type='text' />
          </div>
          <div className='form-group col-md-12'>
            <input className='form-control' name='authorName' placeholder='Author name' type='text' />
          </div>
          <div className='form-group col-md-12'>
            <input className='form-control' name='authorDescription' placeholder='Author description' type='text' />
          </div>
          <p>Recipe Ingredients </p>
          <ol id='ingredientList' className='form-group col-md-12'>
            <li>
              <input type='text' name='p_new_qty' placeholder='Quantity ingredient (e.g. 2)' />
              <input type='text' name='p_new_qty_unit' placeholder='Quantity unit (e.g. slice)' />
              <input type='text' name='p_new_ingredient' placeholder='Ingredient (e.g. bread)' />
              <a href='#' id='addNewIngredient'>Add Ingredient</a>
            </li>
          </ol>

          <p>Recipe Steps </p>
          <ol id='stepList' className='form-group col-md-12'>
            <li>
              <h4>Step</h4>
              <input type='text' name='p_new_step_picture' className='form-group col-md-12'
                     placeholder='Picture URL' />
              <input type='text' name='p_new_step_description' className='form-group col-md-12'
                placeholder='Description' />
              <input type='text' name='p_new_step_tips' className='form-group col-md-12'  placeholder='Tip' />
              <a href='#' id='addNewStep'>Add Step</a>
            </li>
          </ol>

          <div>
            <input className='btn btn-primary' id='submit-button' type='submit' value='Add New Recipe' />
          </div>

        </form>
      </div>
    )
  }
}
