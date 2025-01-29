```javascript
import {unstable_getServerSession} from 'next-auth';

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, options);

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // ... your code here
};
```