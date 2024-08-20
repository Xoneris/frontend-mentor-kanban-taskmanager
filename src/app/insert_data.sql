INSERT INTO taskboard (name, slug) VALUES ('Platform Launch', 'platform-launch');

    INSERT INTO columns (name, taskboard_id) VALUES ('Todo', 1);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Build UI for onboarding flow', '', 'todo', 1);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Sign up page', TRUE, 1);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Sign in page', FALSE, 1);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Welcome page', FALSE, 1);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Build UI for search', '', 'todo', 1);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Search page', FALSE, 2);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Build settings UI', '', 'todo', 1);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Account page', FALSE, 3);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Billing page', FALSE, 3);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('QA and test all major user journeys', 'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.', 'todo', 1);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Internal testing', FALSE, 4);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('External testing', FALSE, 4);

    INSERT INTO columns (name, taskboard_id) VALUES ('Doing', 1);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Design settings and search pages', '', 'doing', 2);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Settings - Account page', TRUE, 5);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Settings - Billing page', TRUE, 5);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Search page', FALSE, 5);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Add account management endpoints', '', 'doing', 2);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Upgrade plan', TRUE, 6);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Cancel plan', TRUE, 6);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Update payment method', FALSE, 6);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Design onboarding flow', '', 'doing', 2);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Sign up page', TRUE, 7);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Sign in page', FALSE, 7);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Welcome page', FALSE, 7);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Add search enpoints', '', 'doing', 2);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Add search endpoint', TRUE, 8);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Define search filters', FALSE, 8);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Add authentication endpoints', '', 'doing', 2);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Define user model', TRUE, 9);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Add auth endpoints', FALSE, 9);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Research pricing points of various competitors and trial different business models', 'We know what we''re planning to build for version one. Now we need to finalise the first pricing model we''ll use. Keep iterating the subtasks until we have a coherent proposition.', 'doing', 2);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Research competitor pricing and business models', TRUE, 10);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Outline a business model that works for our solution', FALSE, 10);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Talk to potential customers about our proposed solution and ask for fair price expectancy', FALSE, 10);

    INSERT INTO columns (name, taskboard_id) VALUES ('Done', 1);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Conduct 5 wireframe tests', 'Ensure the layout continues to make sense and we have strong buy-in from potential users.', 'done', 3);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Complete 5 wireframe prototype tests', TRUE, 11);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Create wireframe prototype', 'Create a greyscale clickable wireframe prototype to test our asssumptions so far.', 'done', 3);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Create clickable wireframe prototype in Balsamiq', TRUE, 12);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Review results of usability tests and iterate', 'Keep iterating through the subtasks until we''re clear on the core concepts for the app.', 'done', 3);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Meet to review notes from previous tests and plan changes', TRUE, 13);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Make changes to paper prototypes', TRUE, 13);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Conduct 5 usability tests', TRUE, 13);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Create paper prototypes and conduct 10 usability tests with potential customers', '', 'done', 3);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Create paper prototypes for version one', TRUE, 14);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Complete 10 usability tests', TRUE, 14);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Market discovery', 'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.', 'done', 3);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Interview 10 prospective customers', TRUE, 15);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Competitor analysis', '', 'done', 3);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Find direct and indirect competitors', TRUE, 16);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('SWOT analysis for each competitor', TRUE, 16);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Research the market', 'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.', 'done', 3);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Write up research analysis', TRUE, 17);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Calculate TAM', TRUE, 17);

INSERT INTO taskboard (name, slug) VALUES ('Marketing Plan', 'marketing-plan');

    INSERT INTO columns (name, taskboard_id) VALUES ('Todo', 2);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Plan Product Hunt launch', '', 'todo', 4);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Find hunter', FALSE, 18);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Gather assets', FALSE, 18);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Draft product page', FALSE, 18);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Notify customers', FALSE, 18);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Notify network', FALSE, 18);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Launch!', FALSE, 18);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Share on Show HN', '', 'todo', 4);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Draft out HN post', FALSE, 19);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Get feedback and refine', FALSE, 19);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Publish post', FALSE, 19);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Write launch article to publish on multiple channels', '', 'todo', 4);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Write article', FALSE, 20);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Publish on LinkedIn', FALSE, 20);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Publish on Inndie Hackers', FALSE, 20);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Publish on Medium', FALSE, 20);

    INSERT INTO columns (name, taskboard_id) VALUES ('Doing', 2);

    INSERT INTO columns (name, taskboard_id) VALUES ('Done', 2);

INSERT INTO taskboard (name, slug) VALUES ('Roadmap', 'roadmap');
    INSERT INTO columns (name, taskboard_id) VALUES ('Now', 3);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Launch version one', '', 'todo', 7);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Launch privately to our waitlist', FALSE, 21);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Launch publicly on PH, HN, etc.', FALSE, 21);
        INSERT INTO tasks (title, description, status, columns_id) VALUES ('Review early feedback and plan next steps for roadmap', 'Beyond the initial launch, we''re keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.', 'todo', 7);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Interview 10 customers', FALSE, 22);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Review common customer pain points and suggestions', FALSE, 22);
            INSERT INTO subtasks (title, is_completed, tasks_id) VALUES ('Outline next steps for our roadmap', FALSE, 22);
    INSERT INTO columns (name, taskboard_id) VALUES ('Next', 3);
    INSERT INTO columns (name, taskboard_id) VALUES ('Later', 3);