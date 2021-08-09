import React from 'react';
import styled from 'styled-components/macro';
import OptimisedImage from '../OptimisedImage/OptimisedImage';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <OptimisedImage src={src} imgComponent={<Image src={src} alt={alt} />} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Tag = styled.li`
  padding: 4px 8px;
  display: inline-block;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  margin: 0 4px;
  &:last-child {
    margin-right: 0;
  }
`;

export default PhotoGridItem;
