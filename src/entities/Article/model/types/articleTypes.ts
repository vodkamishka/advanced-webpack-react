interface ArticleBlockBase {
    id: string;
    type: string;
}

enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[]
}

interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    title?: string;
    src: string;
}

interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

enum ArticleType {
    'IT' = 'IT',
    'SCIENCE' = 'SCIENCE',
    'ART' = 'ART'
}
export interface Article {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[]
}