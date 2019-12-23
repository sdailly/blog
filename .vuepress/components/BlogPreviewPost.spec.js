import BlogPreviewPost from './BlogPreviewPost';
import {mount, RouterLinkStub} from '@vue/test-utils';

const post = {
    path: '/test',
    frontmatter: {
        title: 'Titre',
        description: 'Description',
        tags: ['js', 'vue']
    }
};

describe('Show tag elements', function () {
    const wrapper = mount(BlogPreviewPost, {
        propsData: {
            post
        },
        stubs: {
            RouterLink: RouterLinkStub
        }
    });

    test('List post should not be visible', () => {
        expect(wrapper.find('.BlogPreviewPost-tags').isVisible()).toBe(true)
    });

    test('BlogPreviewPost-media should not be visible', () => {
        expect(wrapper.find('.BlogPreviewPost-media').exists()).toBe(false)
    });

    test('BlogPreviewPost-description should not be visible', () => {
        expect(wrapper.find('.BlogPreviewPost-description').exists()).toBe(true)
    });

    const wrapper2 = mount(BlogPreviewPost, {
        propsData: {
            post: {
                path: '/test',
                frontmatter: {
                    title: 'Titre',
                    coverImage: 'myImage'
                }
            }
        },
        stubs: {
            RouterLink: RouterLinkStub
        }
    });

    test('BlogPreviewPost-media should be visible', () => {
        expect(wrapper2.find('.BlogPreviewPost-media').exists()).toBe(true)
    });

    test('BlogPreviewPost-tags should not be visible', () => {
        expect(wrapper2.find('.BlogPreviewPost-tags').exists()).toBe(false)
    });

    test('BlogPreviewPost-description should not be visible', () => {
        expect(wrapper2.find('.BlogPreviewPost-description').exists()).toBe(false)
    });
});
