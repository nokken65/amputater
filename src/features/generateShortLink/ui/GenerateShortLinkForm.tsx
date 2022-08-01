import { useUnit } from 'effector-react';
import { useForm } from 'effector-react-form';

import { CopyShortLink } from '@/entities/ShortLink';
import { LinkIcon } from '@/shared/icons';
import { Form, Input } from '@/shared/lib/Form';
import { Button } from '@/shared/ui';

import { $generateShortLinkLoading, generateShortLinkForm } from '../model';
import { $generatedShortLink } from '../model/generatedShortLink';
import { GenerateShortLinkFormValues } from '../model/model';

export const GenerateShortLinkForm = () => {
  const { controller, handleSubmit } = useForm<GenerateShortLinkFormValues>({
    form: generateShortLinkForm,
  });
  const generatedShortLink = useUnit($generatedShortLink);
  const generateShortLinkLoading = useUnit($generateShortLinkLoading);

  return (
    <>
      <Form className='w-full' onSubmit={handleSubmit}>
        <Input
          after={
            <Button htmlType='submit' rounded={false}>
              Try now
            </Button>
          }
          before={<LinkIcon className='mx-4 h-8 w-8 self-center' />}
          className='w-10/12 lg:w-full'
          controller={controller({
            name: 'link',
          })}
          placeholder='https://www.youtube.com/watch?v=nhj5YLvdq9U&ab_channel=SkaiiNy'
        />
      </Form>
      {generatedShortLink && (
        <CopyShortLink text={generatedShortLink.shortLink} />
      )}
      {generateShortLinkLoading && <span>Loading...</span>}
    </>
  );
};
