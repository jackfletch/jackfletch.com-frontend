import styled from 'styled-components';
import {Container, Meta, Page, RecipeCard, SectionHeader} from '../components';
import config from '../config/website';
import recipes from '../data/recipes';

const List = styled.div`
  border-top: 1px solid #eee;
`;

const RecipesPage = () => {
  const title = `Recipes | ${config.title}`;

  return (
    <>
      <Meta title={title} />
      <Page>
        <Container $narrow $padding>
          <SectionHeader title="Recipes" />
          <List>
            {[...recipes]
              .sort((a, b) => a.slug.localeCompare(b.slug))
              .map(recipe => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
          </List>
        </Container>
      </Page>
    </>
  );
};

export default RecipesPage;
