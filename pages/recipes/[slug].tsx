import ErrorPage from 'next/error';
import type {GetStaticPaths, GetStaticProps} from 'next';
import styled from 'styled-components';

import {
  Button,
  Container,
  Meta,
  Page,
  RecipeTable,
  SectionHeader,
} from '../../components';
import {ArrowLeftLong} from '../../components/icons';
import config from '../../config/website';
import recipes, {Recipe, SourceKind} from '../../data/recipes';

const SOURCE_PREFIX: Record<SourceKind, string> = {
  stolen: 'Stolen from',
  adapted: 'Adapted from',
  influenced: 'Influenced by',
  original: 'Original by',
};

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    margin-top: 4rem;
  }
`;

const SourceP = styled.p`
  margin-top: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.grays[2]};
  font-style: italic;
`;

const BackButtonDiv = styled.div`
  margin-top: 4rem;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    margin-top: 6.25rem;
  }
`;

const Icon = styled.span`
  vertical-align: middle;
  line-height: 0;
`;

interface RecipePageProps {
  recipe: Recipe | null;
}

const RecipePage = ({recipe}: RecipePageProps) => {
  if (!recipe) {
    return <ErrorPage statusCode={404} />;
  }

  const pageTitle = `${recipe.title} | ${config.title}`;

  return (
    <>
      <Meta title={pageTitle} />
      <Page>
        <Container $padding>
          <SectionHeader title={recipe.title} />
          <TableWrapper>
            <RecipeTable recipe={recipe} />
          </TableWrapper>
          <SourceP>
            {SOURCE_PREFIX[recipe.source.kind]}{' '}
            {recipe.source.url ? (
              <a
                href={recipe.source.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {recipe.source.text}
              </a>
            ) : (
              recipe.source.text
            )}
          </SourceP>
          <BackButtonDiv>
            <Button href="/recipes" invert>
              <Icon>
                <ArrowLeftLong color="white" />
              </Icon>{' '}
              Back to Recipes
            </Button>
          </BackButtonDiv>
        </Container>
      </Page>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: recipes.map(r => ({params: {slug: r.slug}})),
  fallback: false,
});

export const getStaticProps: GetStaticProps<RecipePageProps> = async ({
  params,
}) => {
  const slug = params?.slug;
  const recipe = recipes.find(r => r.slug === slug) ?? null;
  return {props: {recipe}};
};

export default RecipePage;
