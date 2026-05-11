import styled from 'styled-components';

import ConditionalLink from './ConditionalLink';
import {Recipe} from '../data/recipes';

const Row = styled(ConditionalLink)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.4rem 0.5rem;
  border-bottom: 1px solid #eee;
  color: inherit;
  text-decoration: none;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: rgba(3, 102, 214, 0.06);
    text-decoration: none;
  }
`;

const Title = styled.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Meta = styled.span`
  color: ${props => props.theme.colors.grays[2]};
  font-size: 0.875rem;
  white-space: nowrap;
  flex-shrink: 0;
`;

function countIngredients(recipe: Recipe): number {
  let total = 0;
  for (const step of recipe.pipeline) total += step.add?.length ?? 0;
  for (const branch of Object.values(recipe.branches ?? {})) {
    for (const step of branch) total += step.add?.length ?? 0;
  }
  return total;
}

function countSteps(recipe: Recipe): number {
  let total = recipe.pipeline.length;
  for (const branch of Object.values(recipe.branches ?? {})) {
    total += branch.length;
  }
  return total;
}

const RecipeCard = ({recipe}: {recipe: Recipe}) => {
  const ingredients = countIngredients(recipe);
  const steps = countSteps(recipe);
  return (
    <Row href={`/recipes/${recipe.slug}`}>
      <Title>{recipe.title}</Title>
      <Meta>
        {ingredients} ing · {steps} step{steps === 1 ? '' : 's'}
      </Meta>
    </Row>
  );
};

export default RecipeCard;
