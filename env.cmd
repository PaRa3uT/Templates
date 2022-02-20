set GIT_ENV_FILE = \+DEV_ENV+\Git2_PE\env_git.cmd
set NODE_ENV_FILE = \+DEV_ENV+\nodejs16\env_node.cmd

call %GIT_ENV_FILE%
call %NODE_ENV_FILE%
