// Bootstrap the Vue Application
// ============================================================================
document.addEventListener('DOMContentLoaded', () =>
{
    new Vue({
        el: '#application',
        data()
        {
            return {
                w: 500,
                h: 512,
                points: ''
            };
        },
        created()
        {
            firebase.database().ref('data')
                .orderByKey()
                .limitToLast(50)
                .on('value', (snapshot) =>
                {
                    if (snapshot.exists())
                    {
                        this.points = Object.values(snapshot.val())
                            .map((x, i) => `${i * 10},${(x['x'] + 2048) * 0.125}`)
                            .join(' ');
                    }
                });
        }
    });
});