# New Site

## Staging Server

### Where?

Staging is hosted on 4gb digital ocean droplet.

### Access?

Developer access to server will be via SSH with authentication keys.

### How to deploy new changes

```bash
cd ~/gatsby
git pull
docker-compose up --build --force-recreate -d
```

... the last command will take a loooooong time.

## Production Server

Production server and deployments will be handled by @mmeyer2k.
