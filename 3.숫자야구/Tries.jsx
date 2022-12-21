const React = require('react');
const { memo } = require('react');

const Tries = memo(({ tryInfo }) => {
    return (
        <li>
            <div><strong>{tryInfo.try}</strong></div>
            <div>{tryInfo.result}</div>
        </li>
    );
});
Tries.displayName='Try';
module.exports = Tries;